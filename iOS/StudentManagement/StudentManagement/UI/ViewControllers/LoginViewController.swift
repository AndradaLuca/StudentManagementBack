//
//  LoginViewController.swift
//  StudentManagement
//
//  Created by Radu Tothazan on 08/05/2019.
//  Copyright © 2019 radu. All rights reserved.
//

import UIKit

class LoginViewController: UIViewController {

    @IBOutlet weak var emailTextField: MainTextField!
    @IBOutlet weak var passwordTextField: MainTextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let tapGesture = UITapGestureRecognizer(target: self, action: #selector(dismissKeyboard))
        self.view.addGestureRecognizer(tapGesture)
    }
    
    @objc func dismissKeyboard() {
        self.view.endEditing(true)
    }
    
    @IBAction func loginPressed(_ sender: Any) {
        ApiManager.login(email: emailTextField.text ?? "", password: passwordTextField.text ?? "") { (success) in
            self.emailTextField.text = ""
            self.passwordTextField.text = ""
            if success {
                let userKey = UserDefaults.standard.string(forKey: tokenKey)
                var identifier = loginNavigationId
                if let userKey = userKey {
                    if userKey == "admin" {
                        identifier = mainTabBarId
                    } else if userKey == "secretara" {
                        identifier = secretaraID
                    } else {
                        identifier = studentGradeID
                    }
                }
                let nextVC = self.storyboard?.instantiateViewController(withIdentifier: identifier)
                self.present(nextVC ?? UIViewController(), animated: true, completion: nil)
            } else {
                let alert = MainAlertController.mainAlert(title: "Something went wrong", message: "Invalid username or password")
                self.present(alert, animated: true, completion: nil)
            }
        }
    }
}

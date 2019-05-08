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

    }
    
    @IBAction func loginPressed(_ sender: Any) {
        ApiManager.login(email: emailTextField.text ?? "", password: passwordTextField.text ?? "") { (success) in
            self.emailTextField.text = ""
            self.passwordTextField.text = ""
            if success {
                let mainTabBar = self.storyboard?.instantiateViewController(withIdentifier: "mainTabBar") as? UITabBarController ?? UITabBarController()
                self.present(mainTabBar, animated: true, completion: nil)
            } else {
                let alert = MainAlertController.mainAlert(title: "Something went wrong", message: "Invalid username or password")
                self.present(alert, animated: true, completion: nil)
            }
        }
    }
}

//
//  SecretaraViewController.swift
//  StudentManagement
//
//  Created by Radu Tothazan on 30/05/2019.
//  Copyright © 2019 radu. All rights reserved.
//

import UIKit

class SecretaraViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {

    @IBOutlet weak var tableView: UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    @IBAction func logoutTapped(_ sender: UIBarButtonItem) {
        UserDefaults.standard.removeObject(forKey: tokenKey)
        let nextVC = self.storyboard?.instantiateViewController(withIdentifier: loginNavigationId) as? UINavigationController ?? UINavigationController()
        self.present(nextVC, animated: true, completion: nil)
    }
    
    @IBAction func createGroupTapped(_ sender: UIBarButtonItem) {
        
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 0
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        return UITableViewCell()
    }
}

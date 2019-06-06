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
    var groups: [Group] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.getGroups()
    }
    
    private func getGroups() {
        ApiManager.getGroups { (groups) in
            if let groups = groups {
                self.groups = groups
                self.tableView.reloadData()
            }
        }
    }
    
    @IBAction func logoutTapped(_ sender: UIBarButtonItem) {
        UserDefaults.standard.removeObject(forKey: tokenKey)
        let nextVC = self.storyboard?.instantiateViewController(withIdentifier: loginNavigationId) as? UINavigationController ?? UINavigationController()
        self.present(nextVC, animated: true, completion: nil)
    }
    
    @IBAction func createGroupTapped(_ sender: UIBarButtonItem) {
        let alert = UIAlertController(title: "Creaza o grupa noua", message: "", preferredStyle: .alert)
        alert.addTextField(configurationHandler: nil)
        alert.addAction(UIAlertAction(title: "Adaugare grupa", style: .default, handler: { (alertAction) in
            if let name = alert.textFields?.first?.text {
                ApiManager.addGroup(name: name, completion: { (_) in
                    self.getGroups()
                    alert.dismiss(animated: true, completion: nil)
                })
            }
        }))
        alert.addAction(UIAlertAction(title: "Cancel", style: .cancel, handler: nil))
        self.present(alert, animated: true, completion: nil)
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.groups.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "GroupTableViewCell", for: indexPath) as! GroupTableViewCell
        cell.name.text = groups[indexPath.row].name
        return cell
    }
}

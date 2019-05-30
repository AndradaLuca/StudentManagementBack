//
//  ProfessorViewController.swift
//  StudentManagement
//
//  Created by Radu Tothazan on 29/05/2019.
//  Copyright © 2019 radu. All rights reserved.
//

import UIKit

class ProfessorViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {

    @IBOutlet weak var tableView: UITableView!
    var students: [Student] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        ApiManager.getAllStudents { (students) in
            if let students = students {
                self.students = students
                self.tableView.reloadData()
            }
        }
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.students.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "StudentTableViewCell", for: indexPath) as! StudentTableViewCell
        cell.name.text = students[indexPath.row].email
        cell.grade.text = students[indexPath.row].idGroup
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let alert = UIAlertController(title: students[indexPath.row].email, message: students[indexPath.row].idGroup, preferredStyle: .alert)
        alert.addTextField(configurationHandler: nil)
        alert.addAction(UIAlertAction(title: "Adaugare nota", style: .default, handler: { (alertAction) in
            if let grade = alert.textFields?.first?.text {
                //TODO: change with idProfesor
                ApiManager.addStudentGrade(idStudent: self.students[indexPath.row].id, grade: grade, idProfesor: 1, completion: { (_) in
                    alert.dismiss(animated: true, completion: nil)
                })
            }
        }))
        alert.addAction(UIAlertAction(title: "Cancel", style: .cancel, handler: nil))
        self.present(alert, animated: true, completion: nil)
    }

    @IBAction func logoutTapped(_ sender: UIBarButtonItem) {
        UserDefaults.standard.removeObject(forKey: tokenKey)
        let nextVC = self.storyboard?.instantiateViewController(withIdentifier: loginNavigationId) as? UINavigationController ?? UINavigationController()
        self.present(nextVC, animated: true, completion: nil)
    }
}

//
//  MainAlertController.swift
//  Parapet
//
//  Created by Radu Tothazan on 26/01/2019.
//  Copyright © 2019 Parapet. All rights reserved.
//

import Foundation
import UIKit

class MainAlertController {
    
    static func mainAlert(title: String, message: String) -> UIAlertController {
        let alert = UIAlertController(title: title, message: message, preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "OK", style: .destructive, handler: nil))
        return alert
    }
}

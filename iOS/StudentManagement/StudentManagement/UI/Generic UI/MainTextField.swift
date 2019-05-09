//
//  MainTextField.swift
//  Parapet
//
//  Created by Radu Tothazan on 26/01/2019.
//  Copyright © 2019 Parapet. All rights reserved.
//

import UIKit

class MainTextField: UITextField {

    override func draw(_ rect: CGRect) {
        self.layer.cornerRadius = rect.height / 2
        self.layer.borderColor = UIColor.mainColor.cgColor
        self.layer.borderWidth = 1
        self.textColor = UIColor.mainColor
    }

    override func textRect(forBounds bounds: CGRect) -> CGRect {
        return CGRect(x: 20, y: 0, width: bounds.width - 40, height: bounds.height)
    }
    
    override func editingRect(forBounds bounds: CGRect) -> CGRect {
        return CGRect(x: 20, y: 0, width: bounds.width - 40, height: bounds.height)
    }
}

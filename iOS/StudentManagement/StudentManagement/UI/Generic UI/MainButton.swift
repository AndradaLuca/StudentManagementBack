//
//  MainButton.swift
//  Parapet
//
//  Created by Radu Tothazan on 26/01/2019.
//  Copyright © 2019 Parapet. All rights reserved.
//

import UIKit

class MainButton: UIButton {

    override func draw(_ rect: CGRect) {
        self.layer.cornerRadius = rect.height / 2
        self.layer.backgroundColor = UIColor.mainColor.cgColor
        self.setTitleColor(.white, for: .normal)
    }
}

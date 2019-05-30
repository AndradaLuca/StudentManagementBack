//
//  StudentTableViewCell.swift
//  StudentManagement
//
//  Created by Radu Tothazan on 30/05/2019.
//  Copyright © 2019 radu. All rights reserved.
//

import UIKit

class StudentTableViewCell: UITableViewCell {
    
    @IBOutlet weak var name: UILabel!
    @IBOutlet weak var grade: UILabel!

    override func awakeFromNib() {
        super.awakeFromNib()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }

}

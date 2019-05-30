//
//  ProfessorTableViewCell.swift
//  StudentManagement
//
//  Created by Radu Tothazan on 30/05/2019.
//  Copyright © 2019 radu. All rights reserved.
//

import UIKit

class ProfessorTableViewCell: UITableViewCell {

    @IBOutlet weak var name: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}

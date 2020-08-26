//
//  ZalgoCharacters.swift
//  textTransformer
//
//  Created by Lukas Jocham on 03.10.19.
//  Copyright © 2019 Lukas Jocham. All rights reserved.
//

import Foundation

struct ZalgoCharacters: Codable {
    let above:  [String]
    let inline: [String]
    let below:  [String]
    
    init() {
        let url = Bundle.main.url(forResource: "zalgo", withExtension: "json")!
        let data = try! Data(contentsOf: url)
     
        let decoder = JSONDecoder()
        self = try! decoder.decode(ZalgoCharacters.self, from: data)
    }
}

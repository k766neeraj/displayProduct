import React from 'react'
import { Foot, } from './styling/Items'
import { Subtitle } from './styling/Title'

function Footer() {
    return (
        <Foot >
            <div className="copyright"><span class="material-symbols-outlined">
                copyright
            </span>
                <Subtitle>2023 All Rights Reserved</Subtitle> </div>
            <div className="socialhandel">
                <div className="twitter">
                <i class="fa-brands fa-x-twitter"></i>
                </div>
                <div className="instagram">
                <i class="fa-brands fa-instagram"></i>
                </div>
                <div className="facebook">
                <i class="fa-brands fa-facebook-f"></i>
                </div>
            </div>
        </Foot>
    )
}

export default Footer

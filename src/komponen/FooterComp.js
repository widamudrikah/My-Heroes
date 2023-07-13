import React from 'react'

const FooterComp = () => {
  return (
    <div className='footer'>
        <div className='sb__footer section_padding'>
            <div className='sb_footer-links'>
                <div className='sb_footer-links-div'>
                    <h4>For Business</h4>
                    <a href='/employer'>
                        <p>Employer</p>
                    </a>
                    <a href='/employer'>
                        <p>Health Plan</p>
                    </a>
                    <a href='/employer'>
                        <p>Individual</p>
                    </a>
                </div>
                <div className='sb_fotter-links_div'>
                    <h4>Resources</h4>
                    <a href='/resources'>
                        <p>Resources Center</p>
                    </a>
                    <a href='/resources'>
                        <p>Testimonials</p>
                    </a>
                    <a href='/resources'>
                        <p>SVT</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Partners</h4>
                    <a href='/employer'>
                        <p>swing Tech</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Company</h4>
                    <a href='/about'>
                        <p>About</p>
                    </a>
                    <a href='/press'>
                        <p>Press</p>
                    </a>
                    <a href='/career'>
                        <p>Career</p>
                    </a>
                    <a href='/contact'>
                        <p>Contact</p>
                    </a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default FooterComp

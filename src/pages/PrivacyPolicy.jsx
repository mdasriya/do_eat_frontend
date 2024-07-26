import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div className=' pt-[149px] w-9/12 mx-auto '>
            <div>
                <p className=' flex flex-col gap-2 mb-24 text-xl'>
                    {/* <p className=' text-3xl font-bold text-center'>Privacy Policy</p> */}
                    {/* 
                    We gather personal information like names, emails, and addresses to facilitate order processing and communication. Your data remains securely managed, disclosed only to trusted service providers or as mandated by law. You retain rights to access, correct, or erase your data and opt out of marketing communications. Our platform is not intended for users under 18 years old. This policy may undergo updates; hence, please review periodically. Reach out to us with any queries or clarifications. */}


                    <h1 className=' text-3xl font-bold text-center'>Privacy Policy</h1>
                    <p className=' text-blue-700 font-semibold'>Last Updated: 25/05/2024</p>

                    <p>
                        Welcome to doeats. We value your privacy and are committed
                        to protecting your personal information. This Privacy Policy outlines
                        the types of information we collect from you, how we use it, and the
                        measures we take to ensure your data is protected.
                    </p>

                    <h2 className=' font-bold'>1. Information We Collect</h2>
                    <p>We collect various types of information in connection with the services we provide, including:</p>
                    <ul className='list-disc pl-10'>
                        <li>
                            <span className=' font-semibold'>Personal Information:</span> Name, email address, phone number, billing address, and shipping address.
                        </li>
                       
                        <li>
                            <span className=' font-semibold'>Order Information:</span> Details of the products you purchase, order history, and preferences.
                        </li>
                        <li>
                            <span className=' font-semibold'>Technical Information:</span> IP address, browser type, operating system, and other technical information when you visit our site.
                        </li>
                        <li>
                            <span className=' font-semibold'>Cookies and Tracking Information:</span> Data collected through cookies and other tracking technologies to improve your browsing experience.
                        </li>
                    </ul>

                    <h2 className=' font-bold'>2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul className='list-disc pl-10'>
                        <li>Process and fulfill your orders.</li>
                    
                        <li>Communicate with you regarding your orders, inquiries, and promotional offers.</li>
                        <li>Improve our website, products, and services.</li>
                        <li>Analyze website usage and enhance user experience.</li>
                        <li>Comply with legal obligations and protect our legal rights.</li>
                    </ul>

                    <h2 className=' font-bold'>3. Sharing Your Information</h2>
                    <p>We may share your information with third parties in the following situations:</p>
                    <ul className='list-disc pl-10'>
                       
                        <li>
                            <span className=' font-semibold'>Legal Requirements:</span> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                        </li>
                        <li>
                            <span className=' font-semibold'>Business Transfers:</span> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                        </li>
                    </ul>

                    <h2 className=' font-bold'>4. Data Security</h2>
                    <p className=' pl-5'>
                        We take the security of your data seriously and implement appropriate
                        technical and organizational measures to protect it from unauthorized
                        access, alteration, disclosure, or destruction. All payment transactions
                        are encrypted using SSL technology and processed securely by Razorpay.
                    </p>

                    <h2 className=' font-bold'>5. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul className='list-disc pl-10'>
                        <li>Access the personal information we hold about you.</li>
                        <li>Request corrections to any inaccurate or incomplete data.</li>
                        <li>Request the deletion of your personal data, subject to legal obligations.</li>
                        <li>Opt-out of marketing communications at any time.</li>
                    </ul>

                    <h2 className=' font-bold'>6. Cookies</h2>
                    <p className=' pl-5'>
                        Our website uses cookies to enhance your browsing experience. Cookies
                        are small text files stored on your device that help us remember your
                        preferences and improve site functionality. You can control cookie
                        preferences through your browser settings.
                    </p>

                    <h2 className=' font-bold'>7. Changes to This Privacy Policy</h2>
                    <p className=' pl-5'>
                        We may update this Privacy Policy from time to time. Any changes will be
                        posted on this page with an updated effective date. We encourage you to
                        review this policy periodically to stay informed about how we are
                        protecting your information.
                    </p>

                    <h2 className=' font-bold'>8. Contact Us</h2>
                    <p className=' pl-5'>
                        If you have any questions or concerns about this Privacy Policy or our
                        data practices, please contact us at:
                    </p>
                    <address className=' mt-16 font-semibold'>
                        doeats <br />
                        7744055664 <br/>
                        doeat2024@gmail.com
                    </address>
                </p>
            </div>
        </div>
    )
}

export default PrivacyPolicy

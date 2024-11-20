

const ContactPage = () => {
  return (
    <div className='bg-light'>
        <section className="my-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-primary fw-bold fs-2">Contact Information<i className="fa-solid fa-address-card text-primary fs-2 mx-2"></i></h1>
                        <hr className="border border-primary w-auto opacity-75" />
                    </div>
                </div>
            </div>
        </section>
        {/* Contact Form */}
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form action="">
                           <div className="mb-3">
                                <input type="text" name='name' className="form-control form-control-lg" placeholder='Enter Your Name'/>
                            </div>
                            <div className="mb-3">
                                <input type="email" name='email' className="form-control form-control-lg" placeholder='Enter Your Email'/>
                            </div>
                            <div className="mb-3">
                                <textarea name="message" id="" className='form-control form-control-lg' rows='6' placeholder='Enter Message'></textarea>
                            </div>
                            <div className="d-grid">
                                <button className='btn btn-primary text-white my-3'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        {/* Map */}
        <section className="location my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <h3 className="text-primary fw-bold fs-2">Our Location<i className="fa-solid fa-location-dot fs-2 text-primary mx-2"></i></h3>
                        <p className="mb-4">
                            Our team, specializing in developing innovative inventory management systems, is strategically located to serve diverse businesses and streamline their inventory processes. With a robust technological infrastructure and experienced professionals, we’re positioned to deliver top-tier solutions that adapt to your unique inventory challenges. Our location enables us to provide on-site support when necessary and keeps us connected to emerging market trends, allowing us to craft reliable, scalable, and efficient systems tailored to enhance operational productivity and accuracy. We are dedicated to empowering businesses to achieve seamless inventory control, offering support every step of the way.
                        </p>
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.758495989311!2d32.5851896753488!3d0.31376219968317043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc7ed66ffa5d%3A0xaa36425d3b3c47cf!2sEmbassy%20House%2C%20King%20George%20VI%20Way%2C%20Kampala!5e0!3m2!1sen!2sug!4v1729856709754!5m2!1sen!2sug" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactPage
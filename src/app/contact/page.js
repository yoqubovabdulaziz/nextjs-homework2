import React from 'react'
import "./Contact.scss"
import contactImg from "@/assets/contact.jpg"
import Image from 'next/image'

const Contact = () => {
    return (
        <section id="contact">
            <div className="container contact">
                <div className="contact__left">
                    <h1 className="contact__title">Contact Us</h1>
                    <p className="contact__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non quos est ipsum aliquid enim obcaecati nesciunt fugiat vero excepturi, quibusdam ducimus reprehenderit quasi ut deserunt atque natus, sequi pariatur. accusamus maiores placeat delectus voluptatum dolorum maxime quos ut aspernatur!</p>
                    <button className='contact__btn'>Contact Us</button>
                </div>
                <div className="contact__right">
                    <Image src={contactImg} />
                </div>
            </div>
            <div className="container contact__bottom">
                <div className="contact__wrapper">
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                    <input type="text" placeholder='Phone Number' />
                    <input type="text" placeholder='Email Address' />
                </div>
                <textarea placeholder='Comment' name="" id="" cols="30" rows="3"></textarea>
                <button className="contact__send__btn">Send</button>
            </div>
        </section>
    )
}

export default Contact
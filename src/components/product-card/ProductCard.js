"use client"

import React from 'react'
import "./ProductCard.scss"
import Image from 'next/image'

import { IoCartOutline } from "react-icons/io5";

const ProductCard = ({ data }) => {
    let product = data?.map(el => (
        <div key={el.id} className="card">
            <button className="card__cart__btn">
                <IoCartOutline />
            </button>
            <div className="card__frame">
                <Image title={el.title} width={300} height={300} src={el.images[0]} />
            </div>
            <div className="card__content">
                <h2 className="card__title">{el.title}</h2>
                <p className="card__description">{el.description}</p>
                <div className="card__price__box">
                    <p className="card__price">${el.price}</p>
                    <del className="card__old__price">${el.price * 2}</del>
                </div>
            </div>
        </div>
    ))
    return product
}

export default ProductCard
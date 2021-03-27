import React from 'react'

export const calcTotalPriceTwoArr = (arr, arrConditions) => (
  arr
    .filter(product => arrConditions.map(item => item._id).includes(product._id))
    .map(el => el.price / 100 * arrConditions.filter(item => item._id === el._id).map(_item => _item.quantity))
    .reduce((acc, item) => acc + item, 0)
).toFixed(2)

export const calcTotalPrice = arr => arr.map(el => el.price * el.quantity).reduce((acc, item) => acc + item, 0)

export const calcTotalPriceDiscountTwoArr = (arr, arrConditions, discount) => (
  arr
    .filter(product => arrConditions.map(item => item._id).includes(product._id))
    .map(el => el.price / 100 * arrConditions.filter(item => item._id === el._id).map(_item => _item.quantity))
    .reduce((acc, item) => acc + item, 0) * (1 - (discount / 100))
)

export const calcTotalPriceDiscount = (arr, discount) => arr.map(el => el.price * el.quantity).reduce((acc, item) => acc + item, 0) * (1 - (discount / 100))

export const calcDiscountTwoArr = (arr, arrConditions, discount) => (
  arr
    .filter(product => arrConditions.map(item => item._id).includes(product._id))
    .map(el => el.price / 100 * arrConditions.filter(item => item._id === el._id).map(_item => _item.quantity))
    .reduce((acc, item) => acc + item, 0) * (discount / 100)
).toFixed(2)

export const calcDiscount = (arr, discount) => arr.map(el => el.price * el.quantity).reduce((acc, item) => acc + item, 0) * (discount / 100)

export const calcTax = (arr) => arr.map(el => el.price * el.quantity).reduce((acc, item) => acc + item, 0) * 0.2

export const calcTotalWithoutTax = (arr) => arr.map(el => el.price * el.quantity).reduce((acc, item) => acc + item, 0) * 0.8

export const calcServerTotalPrice = (arr, arrConditions, discount) => (
  arr
    .filter(product => arrConditions.map(item => item._id).includes(product._id))
    .map(el => el.price * arrConditions.filter(item => item._id === el._id).map(_item => _item.quantity))
    .reduce((acc, item) => acc + item, 0) * (1 - (discount / 100))
)

export const calcTotalPriceSuccessfulPayment = (arr, arrConditions, discount) => (
  arr
    .filter(product => arrConditions.map(item => item._id).includes(product._id))
    .map(el => el.price / 100 * arrConditions.filter(item => item._id === el._id).map(_item => _item.quantity))
    .reduce((acc, item) => acc + item, 0) * (1 - (discount / 100))
).toFixed(2)

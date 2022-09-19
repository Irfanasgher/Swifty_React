import React from 'react';
import {
    FaHeart,
    FaShippingFast,
    FaPlane,
    FaRegStar,
    FaStar,
    FaStarHalfAlt,
    FaBeer,
} from "react-icons/fa";

import {
    GiWrappedSweet,
    GiChipsBag,
    GiChocolateBar
} from "react-icons/gi";

import { IoFastFood } from "react-icons/io5"

export const Drink = () => <FaBeer />;
export const Food = () => <IoFastFood />;
export const Sweet = () => <GiWrappedSweet />;
export const Chips = () => <GiChipsBag />;
export const Chocolate = () => <GiChocolateBar />;


export const Heart = () => <FaHeart />;
export const LocalShipping = () => <FaShippingFast />
export const International = () => <FaPlane />
export const EmptyStar = () => <FaRegStar />
export const HalfStar = () => <FaStarHalfAlt />
export const FullStar = () => <FaStar />
// https://react-icons.github.io/react-icons/search?q=food
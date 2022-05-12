import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Customer() {
    const location = useLocation()
    const slug = location.pathname.replace("/customer/","")
    return (
        <div>{slug}</div>
    )
}

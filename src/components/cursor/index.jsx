'use client'
import { useEffect } from "react"
import { gsap } from "gsap"
import "@/components/cursor/cursor.css"

export default function Cursor() {

    useEffect(() => {
        const cursor = document.getElementById('custom-cursor')
        const cursorX = document.querySelectorAll('.cursorX')
        const cursorXD = document.querySelectorAll('.cursorXD')
        const cursorH = document.querySelectorAll('.cursorH')
        const cursorText = document.querySelector('.cursor-text')

        const onMouseMove = (event) => {
            const {clientX, clientY} = event
            gsap.to(cursor, {x:clientX, y:clientY})
        }

        const onMouseEnterLink = () => {
            gsap.to(cursor, {scale:4})
        }

        const onMouseLeaveLink = () => {
            gsap.to(cursor, {scale:0.5})
        }

        const onMouseEnterH = () => {
            gsap.to(cursor, {scale:12})
            cursor.style.mixBlendMode = 'multiply'
            cursorText.style.display = 'none'
        }

        const onMouseLeaveH = () => {
            gsap.to(cursor, {scale:0.5})
            cursor.style.mixBlendMode = 'difference'
            cursorText.style.display = 'flex'
        }
        
        const onMouseEnterE = () => {
            gsap.to(cursor, {scale:4})
            cursor.style.border = '1px solid #fff'
            cursorText.style.backgroundColor = 'black'
        }

        const onMouseLeaveE = () => {
            gsap.to(cursor, {scale:0.5})
            cursorText.style.backgroundColor = 'white'
            cursorText.style.border = 'none'
        }

        document.addEventListener('mousemove', onMouseMove)
        cursorX.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        })
        cursorXD.forEach((e) => {
            e.addEventListener('mouseenter', onMouseEnterE)
            e.addEventListener('mouseleave', onMouseLeaveE)
        })
        cursorH.forEach((e) => {
            e.addEventListener('mouseenter', onMouseEnterH)
            e.addEventListener('mouseleave', onMouseLeaveH)
        })
    })

    return (
        <div id="custom-cursor" className="custom-cursor flex justify-center items-center">
            <span className="cursor-text"></span>
        </div>
    )
}
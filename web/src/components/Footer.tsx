import React from 'react'

export default function Footer() {
  return (
    <footer style={{marginTop : "5rem", textAlign : "center",marginBottom : "2rem"}}>
        © Meyking Enterprise, {new Date().getFullYear()}
    </footer>
  )
}

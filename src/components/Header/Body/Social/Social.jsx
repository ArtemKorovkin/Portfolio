import React from 'react'
import s from './social.module.scss'
import {FaTwitter} from 'react-icons/fa'
import {FaSkype} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import {FaTelegram} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'
import {MdPhoneInTalk} from 'react-icons/md'

const Social = (props) => {
  return (
      <div className = {s.social}>
        <a href=''><FaTwitter size='30px'/></a>
        <a href=''><FaSkype size='30px'/></a>
        <a href=''><IoLogoWhatsapp size='30px'/></a>
        <a href=''><FaTelegram size='30px'/></a>
        <a href=''><IoMdMail size='30px'/></a>
        <a href=''><MdPhoneInTalk size='30px'/></a>
      </div>
  )
}

export default Social

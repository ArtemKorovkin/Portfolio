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
        <a href='https://twitter.com/artkorIT_' target='_blank'><FaTwitter size='30px'/></a>
        <a href='skype:+79244391114?call' target='_blank'><FaSkype size='30px'/></a>
        <a href='https://api.whatsapp.com/send?phone=79244391114' target='_blank'><IoLogoWhatsapp size='30px'/></a>
        <a href='tg://resolve?domain=saimon_kor' target='_blank'><FaTelegram size='30px'/></a>
        <a href='mailto:korovkin.ip@gmail.com' target='_blank'><IoMdMail size='30px'/></a>
        <a href='tel:+79244391114' target='_blank'><MdPhoneInTalk size='30px'/></a>
      </div>
  )
}

export default Social

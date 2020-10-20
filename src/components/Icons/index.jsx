const images = {
  email: require('../../assets/img/Icons/Email.png'),
  gitHub: require('../../assets/img/Icons/GitHub.png'),
  instagram: require('../../assets/img/Icons/Instagram.png'),
  facebook: require('../../assets/img/Icons/Facebook.png'),
  linkedIn: require('../../assets/img/Icons/LinkedIn.png'),
  location: require('../../assets/img/Icons/Location.png'),
  whatsApp: require('../../assets/img/Icons/WhatsApp.png'),
  twitter: require('../../assets/img/Icons/Twitter.png'),
  programmer: require('../../assets/img/Icons/Programmer.png'),
  default: require('../../assets/img/Icons/Default.png'),
}

export const getIcon = (image) => {
  let icon = images[image];
  if (icon === undefined) {
      icon = images.default
  }
  return icon;
}

export default images;
import pic1 from '../images/good-things/pic1.png'
import pic2 from '../images/good-things/pic2.png'
import pic3 from '../images/good-things/pic3.png'

export const goodThings = [
  {
    picture: pic1,
    alt: 'Two guys smiling and staring at the notebook.',
    text: 'Organize your daily job enhance your life performance.'
  },
  {
    picture: pic2,
    alt: 'Man painting.',
    text: 'Mark one activity as done makes your brain understandsthe power of doing.'
  },
  {
    picture: pic3,
    alt: 'A person sewing.',
    text: 'Careful with missunderstanding the difference between a list of things and a list of desires.'
  }
]

export const FULL_LIST_ERROR = 'There can not be more than five tasks per list at the same time.'

export const GENERAL_ERROR = 'Something went wrong.'

export const API_HOST = '192.168.0.13'

export const API_PORT = 3001

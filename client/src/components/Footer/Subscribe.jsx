import {Button, Input} from "@chakra-ui/react"
const Subscribe = () => {
  return (
    <div className="subscribe-container">
        <Input placeholder="Your Email Address" style={{border:"2px solid #006fdd"}}/>
        <Button colorScheme="blue">Subscribe</Button>
    </div>
  )
}

export default Subscribe
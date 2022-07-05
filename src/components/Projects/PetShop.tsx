import {
  Center, Text
} from '@chakra-ui/react'

interface PetShopProps {
  onOpen?: () => void
}

export function PetShop({ onOpen }: PetShopProps) {
  return (
    <Center
      onClick={onOpen}
      cursor={onOpen ? 'pointer' : 'default'}
      bg='white'
      w={onOpen ? 250 : 900}
      h={onOpen ? 175 : 600}
      borderRadius={10}
    >
      <Text color='black' >Pet Shop</Text>
    </Center>
  )
}
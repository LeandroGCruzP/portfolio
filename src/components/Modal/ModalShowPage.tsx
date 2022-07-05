import { Modal, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { PetShop } from '../Projects/PetShop'

export function ModalShowPage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>
      <PetShop onOpen={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} size='4xl' >
        <ModalOverlay />
        <ModalContent>
          <PetShop />
        </ModalContent>
      </Modal>
    </>
  )
}
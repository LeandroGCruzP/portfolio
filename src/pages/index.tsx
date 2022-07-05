import { Center } from "@chakra-ui/react";
import { ModalShowPage } from "../components/Modal/ModalShowPage";

export default function Home() {
  return (
    <Center w='100vw' h='100vh' gap={5} >
      <ModalShowPage />
      <ModalShowPage />
      <ModalShowPage />
    </Center>
  )
}

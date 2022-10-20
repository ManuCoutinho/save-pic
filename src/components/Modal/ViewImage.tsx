import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent
        mx="auto"
        bgColor="pGray.900"
        maxW={['380px', '500px', '900px']}
        w="auto"
        h="auto"
        maxH={['350px', '450px', '600px']}
      >
        <ModalBody p={0}>
          <Image
            src={imgUrl}
            objectFit="cover"
            loading="lazy"
            maxW={['380px', '500px', '900px']}
            maxH={['350px', '450px', '600px']}
          />
        </ModalBody>
        <ModalFooter bg="pGray.800" h="2rem" py="20px" borderBottomRadius="5px">
          <Link href={imgUrl} isExternal textAlign="left" mr="auto">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

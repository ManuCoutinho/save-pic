import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [selectedImage, setSelectedImage] = useState('');
  const { isOpen, onClose, onOpen } = useDisclosure();

  function handleViewImage(url: string): void {
    onOpen();
    setSelectedImage(url);
  }

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={() => handleViewImage(card.url)} />
        ))}
      </SimpleGrid>

      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={selectedImage} />
    </>
  );
}

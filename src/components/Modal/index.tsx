import {
  Button,
  ButtonText,
  Heading,
  Icon,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  View,
  Text,
} from "@gluestack-ui/themed";

type Props = {
  showModal: boolean;
  onCloseModal: () => void;
  onResetGame: () => void;
  type?: string;
};
export default function CustomModal({
  type,
  showModal,
  onCloseModal,
  onResetGame,
}: Props) {
  return (
    <Modal isOpen={showModal} onClose={onCloseModal}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">
            {type === "LOST" ? "باختی" : "برنده شدی"}
          </Heading>
        </ModalHeader>
        <ModalBody>
          <Text>
            {type === "LOST"
              ? "زدی روی مین!"
              : "برای بازی جدید روی ادامه بزنید"}
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            size="sm"
            action="primary"
            borderWidth="$0"
            onPress={() => (type === "LOST" ? onCloseModal() : onResetGame())}
          >
            <ButtonText>ادامه</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

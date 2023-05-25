import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import { styled } from "styled-components";

const CartCount = styled.span`
  width: 17px;
  height: 17px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--delete-color);
  color: white;
  border-radius: 50%;

  position: absolute;
  right: -10px;
  top: 50%;
`;

export const Container = styled.div`
  position: relative;
`;

export function CartControl() {
  const { value } = useLocalStorage("cart-items");

  return (
    <Container>
      <CartIcon />
      {value.length && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}

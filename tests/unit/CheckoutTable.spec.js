import { shallowMount } from '@vue/test-utils';
import CheckoutTable from '@/components/CheckoutTable.vue';

const itemsInCartById = {
  1: {
    id: 'first item',
    quantity: 4,
    price: 100,
  },
  2: {
    id: 'second item',
    quantity: 1,
    price: 50,
  },
};

describe('CheckoutTable.vue', () => {
  it('renders grand total correctly', () => {});

  it('emits removeItemFromCart when deleteButton is clicked', () => {});
});

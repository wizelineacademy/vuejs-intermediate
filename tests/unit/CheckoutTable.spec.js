import { shallowMount } from '@vue/test-utils';
import CheckoutTable from '@/components/CheckoutTable.vue';

const itemsInCartById = {
  1: {
    id: 1,
    name: 'first item',
    quantity: 4,
    price: 100,
  },
  2: {
    id: 2,
    name: 'second item',
    quantity: 1,
    price: 50,
  },
};

describe('CheckoutTable.vue', () => {
  it('renders grand total correctly', () => {});

  it('emits removeItemFromCart when deleteButton is clicked', () => {});
});

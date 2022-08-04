import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Modal, Props } from '../src/Modale/Modale';
import useToogle from '../src/custom-hooks/useToogle';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const meta: Meta = {
  title: 'Modal',
  component: Modal,
};

export default meta;

const Template: Story<Props> = args => {
  const [showModal, toogleModal] = useToogle(false);

  return (
    <>
      <h1 className="text-xl mb-2">Je suis le website</h1>
      <button
        onClick={toogleModal}
        className="bg-orange-300 rounded-md text-neutral-800 px-2 py-1  "
      >
        Show Modal
      </button>
      {showModal && (
        <Modal {...args} toClose={toogleModal}>
          <div className="p-5 bg-white w-1/2 relative">
            <h1 className="text-xl">Titre</h1>{' '}
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem placeat cum dolorum mollitia unde voluptatum
              dignissimos cumque, eligendi et tempore excepturi? Assumenda saepe
              tempora esse at aliquid dolores fugiat voluptate?
            </p>
            <button
              onClick={toogleModal}
              className="absolute top-2 right-2 text-xl"
            >
              <AiOutlineCloseCircle />
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export const Basic = Template.bind({});

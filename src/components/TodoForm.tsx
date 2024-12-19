import { ActionIcon, Flex, Input } from '@mantine/core';
import { Plus } from 'lucide-react';

const TodoForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap="xs">
        <Input size="lg" radius="xs" placeholder="Join Globy..." />
        <ActionIcon variant="filled" size="input-lg" color="blue" type="submit">
          <Plus />
        </ActionIcon>
      </Flex>
    </form>
  );
};

export default TodoForm;

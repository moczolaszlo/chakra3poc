import { useCombobox, useFilter, useListCollection } from '@ark-ui/react';
import { Meta } from '@storybook/react-webpack5';
import Field from '../Field/Field';
import Box from '../Box/Box';
import Combobox from './Combobox';
import Icons from '../Icons';

type StoryArgs = {
  multiple?: boolean;
  size?: 'md' | 'lg';
} & typeof Combobox.Root;

const meta: Meta<StoryArgs> = {
  component: Combobox.Root,
  args: {
    multiple: false,
    size: 'lg',
  },
};

export default meta;

const TypeMap: Record<'project' | 'machine', string> = {
  machine: 'Machine',
  project: 'Project type',
};

const initialItems: { value: string; text: string; group: 'project' | 'machine' }[] = [
  {
    value: 'ios',
    text: 'iOS',
    group: 'project',
  },
  {
    value: 'macos',
    text: 'macOS',
    group: 'project',
  },
  {
    value: 'android',
    text: 'Android',
    group: 'project',
  },
  {
    value: 'cordova',
    text: 'Cordova',
    group: 'project',
  },
  {
    value: 'ionic',
    text: 'Ionic',
    group: 'project',
  },
  {
    value: 'react-native',
    text: 'React Native',
    group: 'project',
  },
  {
    value: 'flutter',
    text: 'Flutter',
    group: 'project',
  },
  {
    value: 'kotlin-multiplatform',
    text: 'Kotlin Multiplatform',
    group: 'project',
  },
  {
    value: 'fastlane',
    text: 'Fastlane',
    group: 'project',
  },
  {
    value: 'node-js',
    text: 'Node.js',
    group: 'project',
  },
  {
    value: 'java',
    text: 'Java',
    group: 'project',
  },
  {
    value: 'go',
    text: 'Go',
    group: 'project',
  },
  {
    value: 'other',
    text: 'Other',
    group: 'project',
  },
  { value: 'xcode', text: 'Xcode', group: 'machine' },
  { value: 'ubuntu', text: 'Ubuntu', group: 'machine' },
];
const StoryComponent = ({ multiple, size }: StoryArgs) => {
  const { contains } = useFilter({ sensitivity: 'base' });

  const { collection, filter, set } = useListCollection({
    initialItems,
    filter: contains,
    groupBy: (item) => item.group,
    itemToString: (item) => item.text,
    itemToValue: (item) => item.value,
  });

  const handleOpenChange = () => {
    set(initialItems);
  };

  const combobox = useCombobox({
    collection,
    multiple,
    onInputValueChange(details) {
      filter(details.inputValue);
    },
    onOpenChange: handleOpenChange,
  });

  return (
    <>
      <Field.Root>
        <Combobox.RootProvider value={combobox} size={size}>
          <Field.Label>Label</Field.Label>
          <Combobox.Control>
            <Combobox.Input />
            <Combobox.ClearTrigger>
              <Icons.Cross />
            </Combobox.ClearTrigger>
            <Combobox.Trigger asChild>
              <Icons.SelectChevron />
            </Combobox.Trigger>
          </Combobox.Control>
          <Combobox.Positioner>
            <Combobox.Content>
              {collection.group().map(([type, group]) => (
                <Combobox.ItemGroup key={type}>
                  <Combobox.ItemGroupLabel>{TypeMap[type as 'machine' | 'project']}</Combobox.ItemGroupLabel>
                  {group.map((item) => (
                    <Combobox.Item key={item.value} item={item}>
                      <Combobox.ItemText>{item.text}</Combobox.ItemText>
                      <Combobox.ItemIndicator asChild>
                        <Icons.CheckCircle />
                      </Combobox.ItemIndicator>
                    </Combobox.Item>
                  ))}
                </Combobox.ItemGroup>
              ))}
            </Combobox.Content>
          </Combobox.Positioner>
        </Combobox.RootProvider>
        <Field.HelperText>Additional Info</Field.HelperText>
        <Field.ErrorText>Error Info</Field.ErrorText>
      </Field.Root>
      <Box marginBlockStart="16" textStyle="body/md/regular">
        Selected items:{' '}
        {combobox.selectedItems.length > 0 ? combobox.selectedItems.map((item) => item.value).join(', ') : '-'}
      </Box>
    </>
  );
};

export const Default = {
  render: StoryComponent,
};

import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateInput,
  BooleanInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const PropertyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="carpet" source="carpet" />
        <TextInput label="city" source="city" />
        <TextInput label="configuration" source="configuration" />
        <DateInput label="constructionstart" source="constructionstart" />
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="isfeatured" source="isfeatured" />
        <BooleanInput label="ispopular" source="ispopular" />
        <BooleanInput label="isPromoted" source="isPromoted" />
        <TextInput label="locality" source="locality" />
        <NumberInput step={1} label="parking" source="parking" />
        <TextInput label="pin" source="pin" />
        <DateInput label="possession" source="possession" />
        <SelectInput
          source="postedBy"
          label="postedBy"
          choices={[
            { label: "Owner", value: "Owner" },
            { label: "Agent", value: "Agent" },
            { label: "Developer", value: "Developer" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="projectaddress" source="projectaddress" />
        <TextInput label="projectname" multiline source="projectname" />
        <DateTimeInput label="promoteduntil" source="promoteduntil" />
        <TextInput label="state" source="state" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Readt To Move", value: "ReadtToMove" },
            { label: "Under Construction", value: "UnderConstruction" },
            { label: "Resale", value: "Resale" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="type"
          label="type"
          choices={[
            { label: "Luxury", value: "Luxury" },
            { label: "Premium", value: "Premium" },
            { label: "Affordable", value: "Affordable" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};

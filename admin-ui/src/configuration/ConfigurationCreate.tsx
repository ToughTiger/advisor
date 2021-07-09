import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ConfigurationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bhktype" source="bhktype" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Create>
  );
};

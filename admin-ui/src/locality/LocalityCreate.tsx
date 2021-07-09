import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LocalityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="slug" source="slug" />
      </SimpleForm>
    </Create>
  );
};

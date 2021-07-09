import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LocalityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="slug" source="slug" />
      </SimpleForm>
    </Edit>
  );
};

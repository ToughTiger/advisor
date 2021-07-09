import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PROPERTY_TITLE_FIELD } from "./PropertyTitle";

export const PropertyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="carpet" source="carpet" />
        <TextField label="city" source="city" />
        <TextField label="configuration" source="configuration" />
        <TextField label="constructionstart" source="constructionstart" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="isfeatured" source="isfeatured" />
        <BooleanField label="ispopular" source="ispopular" />
        <BooleanField label="isPromoted" source="isPromoted" />
        <TextField label="locality" source="locality" />
        <TextField label="parking" source="parking" />
        <TextField label="pin" source="pin" />
        <TextField label="possession" source="possession" />
        <TextField label="postedBy" source="postedBy" />
        <TextField label="projectaddress" source="projectaddress" />
        <TextField label="projectname" source="projectname" />
        <TextField label="promoteduntil" source="promoteduntil" />
        <TextField label="state" source="state" />
        <TextField label="status" source="status" />
        <TextField label="type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="City" target="PropertyId" label="cities">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <ReferenceField
              label="property"
              source="property.id"
              reference="Property"
            >
              <TextField source={PROPERTY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="slug" source="slug" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { CITY_TITLE_FIELD } from "./CityTitle";
import { LOCALITY_TITLE_FIELD } from "../locality/LocalityTitle";

export const CityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="slug" source="slug" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Property"
          target="CityId"
          label="properties"
        >
          <Datagrid rowClick="show">
            <TextField label="carpet" source="carpet" />
            <ReferenceField label="cities" source="city.id" reference="City">
              <TextField source={CITY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="constructionstart" source="constructionstart" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <BooleanField label="isfeatured" source="isfeatured" />
            <BooleanField label="ispopular" source="ispopular" />
            <BooleanField label="isPromoted" source="isPromoted" />
            <ReferenceField
              label="localities"
              source="locality.id"
              reference="Locality"
            >
              <TextField source={LOCALITY_TITLE_FIELD} />
            </ReferenceField>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

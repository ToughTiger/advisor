import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { CityTitle } from "../city/CityTitle";
import { LocalityTitle } from "../locality/LocalityTitle";

export const PropertyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="carpet" source="carpet" />
        <ReferenceInput source="city.id" reference="City" label="cities">
          <SelectInput optionText={CityTitle} />
        </ReferenceInput>
        <DateInput label="constructionstart" source="constructionstart" />
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="isfeatured" source="isfeatured" />
        <BooleanInput label="ispopular" source="ispopular" />
        <BooleanInput label="isPromoted" source="isPromoted" />
        <ReferenceInput
          source="locality.id"
          reference="Locality"
          label="localities"
        >
          <SelectInput optionText={LocalityTitle} />
        </ReferenceInput>
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
    </Edit>
  );
};

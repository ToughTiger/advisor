import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const PropertyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"properties"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="carpet" source="carpet" />
        <TextField label="city" source="city" />
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
      </Datagrid>
    </List>
  );
};

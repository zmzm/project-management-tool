import { GraphQLScalarType, Kind } from 'graphql';

const serializeDate = (value: Date | any) => {
  return value.getTime();
};

const parseLiteralDate = (ast: String | any) => {
  if (ast.kind === Kind.INT) {
    return new Date(ast.value)
  }
  return null;
};

const parseValue = (value: string) => {
  const date = new Date(value);
  return date;
};

const DateType = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue: parseValue, // value from the client
  serialize: serializeDate, // value sent to the client
  parseLiteral: parseLiteralDate, // ast value is always in string format
});

export default DateType;

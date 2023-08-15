import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
const DetailCard = ({ id, image, name, catagorie }) => {
  return (
    <div>
      <Card
        className=" w-[200px]"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
      >
        <Card.Section>
          <Image src={image} height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{name}</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          {catagorie}
        </Text>
        <div className="flex gap-3">
          <Link to={`/editForm/${id}`}>
            <Button
              className=" bg-black text-white"
              variant="light"
              color="white"
              fullWidth
              mt="md"
              radius="md"
            >
              Edit
            </Button>
          </Link>
          <Link to={`/`}>
            <Button
              className=" bg-purple-600 text-white"
              variant="light"
              color="grape"
              fullWidth
              mt="md"
              radius="md"
            >
              Back
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default DetailCard;

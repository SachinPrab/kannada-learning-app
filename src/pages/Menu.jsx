import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    title: "Animals",
    description: "Learn the names of Animals in Kannada!",
    action: "Click to Start",
    path: "/menu/animals",
  },
  {
    title: "Fruits",
    description: "Learn the names of Fruits in Kannada!",
    action: "Click to Start",
    path: "/menu/fruits",
  },
  {
    title: "Vegetables",
    description: "Learn the names of Vegetables in Kannada!",
    action: "Click to Start",
    path: "/menu/vegetables",
  },
  {
    title: "Birds",
    description: "Learn Birds in Kannada!",
    action: "Click to Start",
    path: "/menu/birds",
  },
  {
    title: "Greetings",
    description: "Learn common Greetings in Kannada!",
    action: "Click to Start",
    path: "/menu/greetings",
  },
  {
    title: "Nouns",
    description: "Learn common nouns in Kannada!",
    action: "Click to Start",
    path: "/menu/nouns",
  },
  {
    title: "Adjectives",
    description: "Learn common adjectives in Kannada!",
    action: "Click to Start",
    path: "/menu/adjectives",
  },
  {
    title: "Verbs",
    description: "Learn common verbs in Kannada!",
    action: "Click to Start",
    path: "/menu/verbs",
  },
  {
    title: "Pronouns",
    description: "Learn common pronouns in Kannada!",
    action: "Click to Start",
    path: "/menu/pronouns",
  },
  {
    title: "Prepositions",
    description: "Learn common prepositions in Kannada!",
    action: "Click to Start",
    path: "/menu/prepositions",
  },
];

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-100 via-white to-pink-100 flex items-center justify-center px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {cardData.map((card, idx) => (
          <Card key={idx} className="w-full">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
              <CardAction>
                <Button
                  variant="link"
                  onClick={() => navigate(card.path)}
                  disabled={!card.path}
                >
                  {card.action}
                </Button>
              </CardAction>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Menu;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useState } from "react";

interface IProps {
  playerName: string;
  setPlayerName: (val: string) => void;
  startGame: () => void;
}
export function LogIn({ playerName, setPlayerName, startGame }: IProps) {
  const [noName, setNoName] = useState(false);

  const changeInput = (e: any) => {
    setPlayerName(e.target.value);
  };
  const clickStartGame = () => {
    console.log("playerName", playerName);
    if (playerName) {
      setNoName(false);
      startGame();
    } else setNoName(true);
  };
  return (
    <Card className="w-[380px] ">
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
        <CardDescription>enter your details and atart the game</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your name" value={playerName} onChange={changeInput} />
            </div>
          </div>
          {noName && playerName == "" && <Label className="text-orange-600	">enter your name!</Label>}
        </form>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button className="h-[35px] w-[100px]" onClick={clickStartGame}>
          start game
        </Button>
      </CardFooter>
    </Card>
  );
}

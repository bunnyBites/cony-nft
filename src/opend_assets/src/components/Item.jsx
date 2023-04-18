import React, { useEffect, useState } from "react";
import { HttpAgent, Actor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { idlFactory } from "../../../declarations/nft";

function Item(props) {
  const { canisterId } = props;
  const [nftObj, setNftObj] = useState({ name: "", owner: "", image: "" });
  const agent = new HttpAgent({ host: "http://localhost:8080/" });

  const onLoad = async () => {
    const NFTActor = await Actor.createActor(idlFactory, {
      agent,
      canisterId: Principal.fromText(canisterId),
    });

    const owner = await NFTActor.getOwner();
    const name = await NFTActor.getItemName();
    const images = await NFTActor.getImages();

    // convert array to image
    // get the image content
    const imageContent = new Uint8Array(images);

    // conver the image content to png file using blob object
    const image = URL.createObjectURL(
      new Blob([imageContent.buffer], { type: "image/png" })
    );

    setNftObj({
      name,
      owner: owner.toText(),
      image: image,
    });
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="disGrid-item">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={nftObj.image}
        />
        <div className="disCardContent-root">
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            {nftObj.name}
            <span className="purple-text"></span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            Owner: {nftObj.owner}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;

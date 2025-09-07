import React from "react";

const ProductSpecs = ({ specs }) => {
  return (
    <table className="w-full border-collapse mt-4">
      <tbody>
        {Object.entries(specs).map(([key, value], i) => (
          <tr key={i} className="border-b border-gray-700">
            <td className="py-2 font-semibold">{key}</td>
            <td className="py-2">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductSpecs;

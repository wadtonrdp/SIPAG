export type StatusEstoque = "Em Estoque" | "Aguardando Peça" | "Em Uso" | "Manutenção";
export type StatusPedido  = "Pendente" | "Aprovado" | "Recusado" | "Em Trânsito";

export interface ItemInventario {
  id: string;
  tipo: string;
  quantidade: number;
  status: StatusEstoque;
}

export interface Pedido {
  id: string;
  status: StatusPedido;
}

// ------- Mock Inventário Local -------
export const inventarioMock: ItemInventario[] = [
  { id: "inv-1", tipo: "Carregador",  quantidade: 12, status: "Em Estoque"      },
  { id: "inv-2", tipo: "Placa Pix",  quantidade: 7,  status: "Aguardando Peça" },
  { id: "inv-3", tipo: "CxBobina",             quantidade: 2,  status: "Em Estoque"      },
  { id: "inv-4", tipo: "Chip VIVO",                quantidade: 2,  status: "Aguardando Peça" },
  { id: "inv-5", tipo: "X990",             quantidade: 5,  status: "Em Estoque"      },
  { id: "inv-6", tipo: "Chip CLARO",            quantidade: 1,  status: "Manutenção"      },
];

// ------- Mock Pedidos Recentes -------
export const pedidosMock: Pedido[] = [
  { id: "#PED-1023", status: "Pendente"    },
  { id: "#PED-1024", status: "Aprovado"    },
  { id: "#PED-1025", status: "Recusado"    },
  { id: "#PED-1026", status: "Aprovado"    },
  { id: "#PED-1027", status: "Em Trânsito" },
];

// ------- Funções de fetch simulado -------
export async function fetchInventario(): Promise<ItemInventario[]> {
  await new Promise((res) => setTimeout(res, 300));
  return inventarioMock;
}

export async function fetchPedidos(): Promise<Pedido[]> {
  await new Promise((res) => setTimeout(res, 300));
  return pedidosMock;
}
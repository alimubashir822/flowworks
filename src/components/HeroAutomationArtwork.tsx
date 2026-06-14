'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Mail, 
  MessageSquare, 
  DollarSign, 
  Sparkles,
  Activity,
  Layers,
  Play
} from 'lucide-react';

interface NodeInfo {
  id: string;
  name: string;
  type: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  shadowColor: string;
  x: number; // percentage coordinate
  y: number; // percentage coordinate
  pathD: string;
  status: string;
  description: string;
}

interface ActiveFlow {
  nodeId: string;
  step: number;
  highlightedNodes: string[];
  activePaths: string[];
  statusBanner: string;
}

export default function HeroAutomationArtwork() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeFlow, setActiveFlow] = useState<ActiveFlow | null>(null);
  const [rippleCount, setRippleCount] = useState<number>(0);
  const flowTimeoutRefs = useRef<NodeJS.Timeout[]>([]);

  const nodes: NodeInfo[] = [
    {
      id: 'stripe',
      name: 'Stripe Billing API',
      type: 'Financial Gateway',
      icon: <DollarSign className="w-5.5 h-5.5" />,
      color: '#00D2FF',
      borderColor: 'rgba(0, 210, 255, 0.3)',
      shadowColor: 'rgba(0, 210, 255, 0.5)',
      x: 20,
      y: 28,
      pathD: 'M 20 28 Q 32 40, 50 50',
      status: 'Synced & Active',
      description: 'Reconciles payouts, processes invoice downgrades, and flags duplicate transactions in under 500ms.'
    },
    {
      id: 'crm',
      name: 'Salesforce CRM',
      type: 'Customer Data DB',
      icon: <Database className="w-5.5 h-5.5" />,
      color: '#8B5CF6',
      borderColor: 'rgba(139, 92, 246, 0.3)',
      shadowColor: 'rgba(139, 92, 246, 0.5)',
      x: 80,
      y: 28,
      pathD: 'M 80 28 Q 68 40, 50 50',
      status: 'Connected',
      description: 'Synchronizes deal pipelines, updates client contact profiles, and tracks real-time customer histories.'
    },
    {
      id: 'pinecone',
      name: 'Pinecone Vector DB',
      type: 'Knowledge Retrieval',
      icon: <Layers className="w-5.5 h-5.5" />,
      color: '#0035FF',
      borderColor: 'rgba(0, 53, 255, 0.4)',
      shadowColor: 'rgba(0, 53, 255, 0.6)',
      x: 75,
      y: 72,
      pathD: 'M 75 72 Q 65 62, 50 50',
      status: 'Memory Engaged',
      description: 'Provides long-term semantic memory storage with cosine similarity search for sub-100ms information audits.'
    },
    {
      id: 'gmail',
      name: 'Gmail API Grid',
      type: 'Email Trigger Edge',
      icon: <Mail className="w-5.5 h-5.5" />,
      color: '#10B981',
      borderColor: 'rgba(16, 185, 129, 0.3)',
      shadowColor: 'rgba(16, 185, 129, 0.5)',
      x: 25,
      y: 72,
      pathD: 'M 25 72 Q 35 62, 50 50',
      status: 'Monitoring Inbox',
      description: 'Listens for customer updates, sanitizes sensitive text metadata, and routes tickets to appropriate channels.'
    },
    {
      id: 'slack',
      name: 'Slack Agent App',
      type: 'Communication Hub',
      icon: <MessageSquare className="w-5.5 h-5.5" />,
      color: '#F59E0B',
      borderColor: 'rgba(245, 158, 11, 0.3)',
      shadowColor: 'rgba(245, 158, 11, 0.5)',
      x: 50,
      y: 12,
      pathD: 'M 50 12 Q 48 30, 50 50',
      status: 'Online',
      description: 'Sends real-time workflow status alerts and schedules client meeting invites through active messaging channels.'
    }
  ];

  // Helper to clear running flow timers
  const clearAllFlows = () => {
    flowTimeoutRefs.current.forEach(timer => clearTimeout(timer));
    flowTimeoutRefs.current = [];
    setActiveFlow(null);
  };

  // Trigger Sonar Pulse from Center
  const triggerSonar = () => {
    setRippleCount(prev => prev + 1);
  };

  // Cleanup timers on unmount
  useEffect(() => {
    return () => flowTimeoutRefs.current.forEach(timer => clearTimeout(timer));
  }, []);

  // Launch sequenced click automations
  const handleNodeClick = (nodeId: string) => {
    clearAllFlows();
    
    const queueTimeout = (fn: () => void, delay: number) => {
      const timer = setTimeout(fn, delay);
      flowTimeoutRefs.current.push(timer);
    };

    if (nodeId === 'stripe') {
      // Step 0: Stripe triggers payment sync
      setActiveFlow({
        nodeId: 'stripe',
        step: 0,
        highlightedNodes: ['stripe'],
        activePaths: ['stripe-to-core'],
        statusBanner: 'Billing Trigger: Stripe invoice reconciliation initiated.'
      });

      // Step 1: Core receives transaction
      queueTimeout(() => {
        triggerSonar();
        setActiveFlow({
          nodeId: 'stripe',
          step: 1,
          highlightedNodes: ['stripe', 'core'],
          activePaths: [],
          statusBanner: 'Core Hub: Processing payment receipt & matching account records...'
        });
      }, 1000);

      // Step 2: Core syncs CRM and notifies Slack
      queueTimeout(() => {
        setActiveFlow({
          nodeId: 'stripe',
          step: 2,
          highlightedNodes: ['stripe', 'core', 'crm', 'slack'],
          activePaths: ['core-to-crm', 'core-to-slack'],
          statusBanner: 'Pipeline Sync: Updating Salesforce ledger & alerts sent to Slack channel.'
        });
      }, 2200);

      // Step 3: Complete
      queueTimeout(() => {
        setActiveFlow(null);
      }, 4200);
    } 
    else if (nodeId === 'gmail') {
      // Step 0: Inbox event received
      setActiveFlow({
        nodeId: 'gmail',
        step: 0,
        highlightedNodes: ['gmail'],
        activePaths: ['gmail-to-core'],
        statusBanner: 'Email Ingestion: Incoming client query received on Gmail API node.'
      });

      // Step 1: Core analyzes text
      queueTimeout(() => {
        triggerSonar();
        setActiveFlow({
          nodeId: 'gmail',
          step: 1,
          highlightedNodes: ['gmail', 'core'],
          activePaths: [],
          statusBanner: 'Core Hub: Scrubbing PII context & extracting search embeddings...'
        });
      }, 1000);

      // Step 2: Query vector DB
      queueTimeout(() => {
        setActiveFlow({
          nodeId: 'gmail',
          step: 2,
          highlightedNodes: ['gmail', 'core', 'pinecone'],
          activePaths: ['core-to-pinecone'],
          statusBanner: 'Memory Audit: Retrieving verified policy guidelines from Pinecone DB.'
        });
      }, 2200);

      // Step 3: Dispatch reply & alert Slack
      queueTimeout(() => {
        setActiveFlow({
          nodeId: 'gmail',
          step: 3,
          highlightedNodes: ['gmail', 'core', 'pinecone', 'slack'],
          activePaths: ['core-to-slack'],
          statusBanner: 'Agent Action: Responded to client & logged event to Slack operations app.'
        });
      }, 3400);

      // Step 4: Complete
      queueTimeout(() => {
        setActiveFlow(null);
      }, 5000);
    }
    else if (nodeId === 'pinecone') {
      // Step 0: Vectors query trigger
      setActiveFlow({
        nodeId: 'pinecone',
        step: 0,
        highlightedNodes: ['pinecone'],
        activePaths: ['pinecone-to-core'],
        statusBanner: 'Vector Search: Semantic search query pushed to Core memory bus.'
      });

      // Step 1: Core computes similarity
      queueTimeout(() => {
        triggerSonar();
        setActiveFlow({
          nodeId: 'pinecone',
          step: 1,
          highlightedNodes: ['pinecone', 'core'],
          activePaths: [],
          statusBanner: 'RAG Matrix: Running cosine distance comparison against index segments.'
        });
      }, 1000);

      // Step 2: Core logs search metrics
      queueTimeout(() => {
        setActiveFlow({
          nodeId: 'pinecone',
          step: 2,
          highlightedNodes: ['pinecone', 'core', 'slack'],
          activePaths: ['core-to-slack'],
          statusBanner: 'Audit Analytics: Search precision parameters successfully logged to Slack.'
        });
      }, 2200);

      // Step 3: Complete
      queueTimeout(() => {
        setActiveFlow(null);
      }, 4000);
    }
    else if (nodeId === 'slack') {
      // Step 0: Slack command triggered
      setActiveFlow({
        nodeId: 'slack',
        step: 0,
        highlightedNodes: ['slack'],
        activePaths: ['slack-to-core'],
        statusBanner: 'Slack Dispatch: Command "/audit-ledger" received from administrative staff.'
      });

      // Step 1: Core schedules sub-tasks
      queueTimeout(() => {
        triggerSonar();
        setActiveFlow({
          nodeId: 'slack',
          step: 1,
          highlightedNodes: ['slack', 'core'],
          activePaths: [],
          statusBanner: 'Core Hub: Scheduling multi-agent reconcile operations...'
        });
      }, 1000);

      // Step 2: Reconcile CRM & Stripe
      queueTimeout(() => {
        setActiveFlow({
          nodeId: 'slack',
          step: 2,
          highlightedNodes: ['slack', 'core', 'stripe', 'crm'],
          activePaths: ['core-to-stripe', 'core-to-crm'],
          statusBanner: 'Query Loop: Indexing ledger payouts & syncing deal status data...'
        });
      }, 2200);

      // Step 3: Send back report
      queueTimeout(() => {
        setActiveFlow({
          nodeId: 'slack',
          step: 3,
          highlightedNodes: ['slack', 'core', 'stripe', 'crm'],
          activePaths: ['stripe-to-core', 'crm-to-core'],
          statusBanner: 'Aggregation: Consolidating invoices (142 matched, 0 error flags).'
        });
      }, 3400);

      // Step 4: Log final PDF
      queueTimeout(() => {
        setActiveFlow({
          nodeId: 'slack',
          step: 4,
          highlightedNodes: ['slack', 'core'],
          activePaths: ['core-to-slack'],
          statusBanner: 'Report Complete: Reconciliation logs posted to Slack channels.'
        });
      }, 4600);

      // Step 5: Complete
      queueTimeout(() => {
        setActiveFlow(null);
      }, 6200);
    }
    else if (nodeId === 'crm') {
      // Step 0: CRM state change
      setActiveFlow({
        nodeId: 'crm',
        step: 0,
        highlightedNodes: ['crm'],
        activePaths: ['crm-to-core'],
        statusBanner: 'CRM Alert: Deal stage updated to "Closed-Won" (Initiating onboarding).'
      });

      // Step 1: Core triggers invoice and contract
      queueTimeout(() => {
        triggerSonar();
        setActiveFlow({
          nodeId: 'crm',
          step: 1,
          highlightedNodes: ['crm', 'core'],
          activePaths: [],
          statusBanner: 'Core Hub: Allocating Stripe subscription modules...'
        });
      }, 1000);

      // Step 2: Stripe processes creation
      queueTimeout(() => {
        setActiveFlow({
          nodeId: 'crm',
          step: 2,
          highlightedNodes: ['crm', 'core', 'stripe'],
          activePaths: ['core-to-stripe'],
          statusBanner: 'Stripe Billing: Created subscription invoice ($1,200/month recurring).'
        });
      }, 2200);

      // Step 3: Post confirmation back to Slack
      queueTimeout(() => {
        setActiveFlow({
          nodeId: 'crm',
          step: 3,
          highlightedNodes: ['crm', 'core', 'stripe', 'slack'],
          activePaths: ['core-to-slack'],
          statusBanner: 'Slack Channel: Shared onboarding links to #client-delivery.'
        });
      }, 3400);

      // Step 4: Complete
      queueTimeout(() => {
        setActiveFlow(null);
      }, 5000);
    }
  };

  const getHoverShadowStyle = () => {
    if (hoveredNode && hoveredNode !== 'core') {
      const activeNode = nodes.find(n => n.id === hoveredNode);
      return `0 20px 50px -10px ${activeNode?.shadowColor || 'rgba(0,0,0,0.5)'}, inset 0 0 35px rgba(0,0,0,0.45)`;
    }
    if (activeFlow) {
      const activeNode = nodes.find(n => n.id === activeFlow.nodeId);
      return `0 20px 50px -10px ${activeNode?.shadowColor || 'rgba(0,0,0,0.5)'}, inset 0 0 35px rgba(0,0,0,0.45)`;
    }
    return '0 20px 50px rgba(0,0,0,0.55), inset 0 0 15px rgba(255,255,255,0.01)';
  };

  const getPathColor = (node: NodeInfo) => {
    if (activeFlow) {
      const isPathActive = activeFlow.activePaths.includes(`${node.id}-to-core`) || 
                           activeFlow.activePaths.includes(`core-to-${node.id}`);
      return isPathActive ? node.color : 'rgba(255, 255, 255, 0.03)';
    }
    
    if (hoveredNode) {
      return hoveredNode === node.id ? node.color : 'rgba(255, 255, 255, 0.04)';
    }

    return 'rgba(255, 255, 255, 0.08)';
  };

  return (
    <div 
      className="relative w-full max-w-[550px] aspect-square bg-[#050505]/45 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-700 flex flex-col items-center justify-between p-6"
      style={{ boxShadow: getHoverShadowStyle() }}
    >
      {/* Background Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-dark-grid-subtle opacity-70 pointer-events-none z-0" />
      
      {/* Ambient Pulsing Background Glows */}
      <div className="absolute top-[10%] left-[10%] w-48 h-48 bg-[#00D2FF]/5 rounded-full blur-[80px] pointer-events-none animate-pulse duration-[7000ms]" />
      <div className="absolute bottom-[10%] right-[10%] w-48 h-48 bg-[#8B5CF6]/5 rounded-full blur-[80px] pointer-events-none animate-pulse duration-[9000ms]" />

      {/* SVG Connections & Flows */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#00D2FF" stopOpacity="0" />
          </radialGradient>
          
          <linearGradient id="gradient-stripe" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D2FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00c8ff" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gradient-crm" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
            <stop offset="100%" stopColor="#a785f9" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gradient-pinecone" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0035FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b66ff" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gradient-gmail" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gradient-slack" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Core glow background */}
        <circle cx="50" cy="50" r="18" fill="url(#coreGlow)" />

        {/* Connection paths */}
        {nodes.map((node) => {
          const isHovered = hoveredNode === node.id;
          const isPathActive = activeFlow 
            ? (activeFlow.activePaths.includes(`${node.id}-to-core`) || activeFlow.activePaths.includes(`core-to-${node.id}`))
            : false;
          
          return (
            <g key={`path-group-${node.id}`}>
              {/* Static background path */}
              <path
                d={node.pathD}
                fill="none"
                stroke={getPathColor(node)}
                strokeWidth={isHovered || isPathActive ? '1.8' : '1'}
                className="transition-colors duration-500"
              />
              
              {/* Glowing animated flow path */}
              <motion.path
                d={node.pathD}
                fill="none"
                stroke={`url(#gradient-${node.id})`}
                strokeWidth={isPathActive ? '3' : isHovered ? '2.2' : '1.5'}
                strokeDasharray={isPathActive ? '18 45' : '8 32'}
                animate={{
                  strokeDashoffset: [0, -50]
                }}
                transition={{
                  duration: isPathActive ? 0.9 : isHovered ? 1.4 : 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Orbiting dashboard ring in center SVG overlay */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="rgba(0, 210, 255, 0.08)"
            strokeWidth="1"
            strokeDasharray="6 6"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="rgba(139, 92, 246, 0.08)"
            strokeWidth="0.8"
            strokeDasharray="30 15"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
      </div>

      {/* SONAR RIPPLE RING EFFECT */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 pointer-events-none z-0">
        {rippleCount > 0 && (
          [0, 1, 2].map((i) => (
            <motion.div
              key={`ripple-${rippleCount}-${i}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border pointer-events-none"
              style={{ borderColor: activeFlow ? nodes.find(n => n.id === activeFlow.nodeId)?.color : '#00D2FF' }}
              initial={{ width: 48, height: 48, opacity: 0.8 }}
              animate={{ width: 260, height: 260, opacity: 0 }}
              transition={{ duration: 1.8, delay: i * 0.4, ease: 'easeOut' }}
            />
          ))
        )}
      </div>

      {/* Core Node */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        animate={{ scale: activeFlow ? [1, 1.08, 1] : [1, 1.03, 1] }}
        transition={{ duration: activeFlow ? 1.5 : 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div 
          className="w-16 h-16 rounded-full flex flex-col items-center justify-center bg-black border border-[#00D2FF]/40 shadow-[0_0_25px_rgba(0,210,255,0.25)] relative cursor-none"
          onMouseEnter={() => setHoveredNode('core')}
          onMouseLeave={() => setHoveredNode(null)}
        >
          {/* Animated Core Icon */}
          <Sparkles className="w-6 h-6 text-[#00D2FF] animate-pulse duration-700" />
          <span className="text-[7px] font-mono text-gray-500 uppercase tracking-widest mt-1">Core</span>
          
          {/* Core Outer Orbit Ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[#00D2FF]/10 scale-125 animate-spin duration-[15000ms]" />
        </div>
      </motion.div>

      {/* Satellite Nodes */}
      {nodes.map((node) => {
        const isHovered = hoveredNode === node.id;
        const isNodeHighlighted = activeFlow ? activeFlow.highlightedNodes.includes(node.id) : false;
        
        return (
          <div
            key={node.id}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <motion.div
              className="relative flex items-center justify-center"
              whileHover={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 450, damping: 14 }}
            >
              {/* Glassmorphic Node Icon Container */}
              <button
                type="button"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => handleNodeClick(node.id)}
                className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#0c0c0e]/85 border cursor-none transition-all duration-300 relative group"
                style={{
                  borderColor: isHovered || isNodeHighlighted ? node.color : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: isNodeHighlighted
                    ? `0 0 25px ${node.color}, inset 0 0 10px rgba(255,255,255,0.03)`
                    : isHovered 
                      ? `0 0 20px -5px ${node.color}, inset 0 0 10px rgba(255,255,255,0.03)` 
                      : '0 8px 16px -4px rgba(0,0,0,0.5)',
                  color: isHovered || isNodeHighlighted ? '#fff' : 'rgba(255, 255, 255, 0.6)'
                }}
              >
                {/* Visual anchor point to connections */}
                <div 
                  className="absolute w-2 h-2 rounded-full border border-black transition-all"
                  style={{
                    backgroundColor: node.color,
                    boxShadow: `0 0 8px ${node.color}`,
                    top: node.y > 50 ? '-4px' : 'auto',
                    bottom: node.y <= 50 ? '-4px' : 'auto',
                    left: 'calc(50% - 4px)'
                  }}
                />

                {/* Node Icon */}
                {node.icon}
                
                {/* Play Trigger Indicator overlay */}
                <div className="absolute right-0.5 bottom-0.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 border border-white/10 rounded-full p-0.5 scale-75">
                  <Play className="w-2 h-2 text-white fill-white" />
                </div>
              </button>

              {/* Glowing ring around active nodes */}
              {(isHovered || isNodeHighlighted) && (
                <motion.div
                  className="absolute -inset-1.5 rounded-2xl border pointer-events-none"
                  style={{ borderColor: node.color }}
                  layoutId={`ring-${node.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isNodeHighlighted ? [0.2, 0.6, 0.2] : 0.4 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, repeat: isNodeHighlighted ? Infinity : 0 }}
                />
              )}
            </motion.div>
          </div>
        );
      })}

      {/* Floating Detailed Panel / Tooltip Container */}
      <div className="w-full relative z-30 pt-4 mt-auto">
        <AnimatePresence mode="wait">
          {activeFlow ? (
            <motion.div
              key={`flow-${activeFlow.nodeId}-${activeFlow.step}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass-panel p-4 rounded-xl border border-[#00D2FF]/20 shadow-[0_4px_25px_rgba(0,210,255,0.15)] bg-black/85 flex items-center gap-3"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block mb-0.5">Active Workflow Routine</span>
                <p className="text-xs font-display text-[#00D2FF] font-medium truncate leading-tight">
                  {activeFlow.statusBanner}
                </p>
              </div>
            </motion.div>
          ) : hoveredNode && hoveredNode !== 'core' ? (
            (() => {
              const activeNode = nodes.find(n => n.id === hoveredNode);
              if (!activeNode) return null;
              return (
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="glass-panel p-4 rounded-xl border border-white/10 shadow-2xl bg-black/80 flex items-start gap-3"
                >
                  <div 
                    className="w-1.5 self-stretch rounded shrink-0" 
                    style={{ backgroundColor: activeNode.color }}
                  />
                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider">
                        {activeNode.name}
                      </h4>
                      <span 
                        className="text-[8px] font-mono uppercase px-1.5 py-0.5 rounded border leading-none shrink-0"
                        style={{ 
                          color: activeNode.color, 
                          borderColor: activeNode.borderColor,
                          backgroundColor: `${activeNode.color}08`
                        }}
                      >
                        {activeNode.type}
                      </span>
                    </div>
                    <p className="text-[10.5px] text-gray-400 leading-normal font-sans font-light">
                      {activeNode.description}
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[8.5px] font-mono text-gray-500 uppercase tracking-widest">
                          Status: {activeNode.status}
                        </span>
                      </div>
                      <span className="text-[8.5px] font-mono text-[#00D2FF] uppercase tracking-wider animate-pulse">
                        Click Node to Trigger Flow ➔
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })()
          ) : (
            <motion.div
              key="default-tooltip"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="glass-panel p-3.5 rounded-xl border border-white/5 bg-black/60 text-center"
            >
              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                <Activity className="w-3.5 h-3.5 text-[#00D2FF] animate-pulse shrink-0" />
                Click any API node to simulate automated pipeline transactions
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
